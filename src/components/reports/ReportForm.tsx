
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle, Image, Loader2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Form validation schema
const reportFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Please provide a detailed description (at least 20 characters).",
  }),
  location: z.string().min(5, {
    message: "Please provide the specific location of the issue.",
  }),
  state: z.string({
    required_error: "Please select a state.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  pinCode: z.string().regex(/^\d{6}$/, {
    message: "Please enter a valid 6-digit PIN code.",
  }),
  category: z.string({
    required_error: "Please select an issue category.",
  }),
  contactName: z.string().min(2, {
    message: "Please provide your name.",
  }),
  contactPhone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid 10-digit Indian mobile number.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ReportForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  // Initialize the form
  const form = useForm<z.infer<typeof reportFormSchema>>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      state: "",
      city: "",
      pinCode: "",
      category: "",
      contactName: "",
      contactPhone: "",
      contactEmail: ""
    },
  });

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError("");
    
    if (!e.target.files) return;
    
    const selectedFiles = Array.from(e.target.files);
    
    if (selectedFiles.length > 5) {
      setUploadError("You can only upload a maximum of 5 images");
      return;
    }
    
    // Validate file types and sizes
    const invalidFile = selectedFiles.find(file => !file.type.startsWith('image/'));
    if (invalidFile) {
      setUploadError("Only image files are allowed");
      return;
    }
    
    const largeFile = selectedFiles.find(file => file.size > 5 * 1024 * 1024); // 5MB limit
    if (largeFile) {
      setUploadError("Images must be smaller than 5MB");
      return;
    }
    
    setImages(selectedFiles);
  };

  // Form submission handler
  async function onSubmit(data: z.infer<typeof reportFormSchema>) {
    setIsSubmitting(true);
    setUploadProgress(0);
    
    try {
      // 1. Create the problem report in the database
      const { data: reportData, error: reportError } = await supabase
        .from('community_issues')
        .insert([
          {
            title: data.title,
            description: data.description,
            location: data.location,
            state: data.state,
            city: data.city,
            pin_code: data.pinCode,
            category: data.category,
            contact_name: data.contactName,
            contact_phone: data.contactPhone,
            contact_email: data.contactEmail,
            status: 'pending'
          }
        ])
        .select();
      
      if (reportError) throw reportError;
      
      const reportId = reportData[0].id;
      
      // 2. Upload images if any
      if (images.length > 0) {
        const imageUrls = [];
        
        for (let i = 0; i < images.length; i++) {
          const file = images[i];
          const fileExt = file.name.split('.').pop();
          const fileName = `${reportId}/${Date.now()}-${i}.${fileExt}`;
          const filePath = `issue-images/${fileName}`;
          
          // Upload image
          const { error: uploadError, data: uploadData } = await supabase.storage
            .from('community-issues')
            .upload(filePath, file);
          
          if (uploadError) throw uploadError;
          
          // Get public URL
          const { data: urlData } = supabase.storage
            .from('community-issues')
            .getPublicUrl(filePath);
            
          imageUrls.push(urlData.publicUrl);
          
          // Update progress
          setUploadProgress(((i + 1) / images.length) * 100);
        }
        
        // Update the report with image URLs
        const { error: updateError } = await supabase
          .from('community_issues')
          .update({ images: imageUrls })
          .eq('id', reportId);
          
        if (updateError) throw updateError;
      }
      
      toast({
        title: "Issue Reported Successfully",
        description: "Your community issue has been submitted. Thank you for helping improve your community.",
      });
      
      // Reset form
      form.reset();
      setImages([]);
      
    } catch (error) {
      console.error('Report submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  }

  // Issue categories
  const categories = [
    { value: "roads", label: "Roads & Infrastructure" },
    { value: "sanitation", label: "Sanitation & Waste" },
    { value: "water", label: "Water Supply" },
    { value: "electricity", label: "Electricity" },
    { value: "pollution", label: "Pollution" },
    { value: "public_safety", label: "Public Safety" },
    { value: "traffic", label: "Traffic & Transportation" },
    { value: "noise", label: "Noise Complaints" },
    { value: "public_property", label: "Public Property Damage" },
    { value: "others", label: "Others" }
  ];

  // Indian states for the dropdown
  const states = [
    { value: "AP", label: "Andhra Pradesh" },
    { value: "AR", label: "Arunachal Pradesh" },
    { value: "AS", label: "Assam" },
    { value: "BR", label: "Bihar" },
    { value: "CG", label: "Chhattisgarh" },
    { value: "GA", label: "Goa" },
    { value: "GJ", label: "Gujarat" },
    { value: "HR", label: "Haryana" },
    { value: "HP", label: "Himachal Pradesh" },
    { value: "JK", label: "Jammu and Kashmir" },
    { value: "JH", label: "Jharkhand" },
    { value: "KA", label: "Karnataka" },
    { value: "KL", label: "Kerala" },
    { value: "MP", label: "Madhya Pradesh" },
    { value: "MH", label: "Maharashtra" },
    { value: "MN", label: "Manipur" },
    { value: "ML", label: "Meghalaya" },
    { value: "MZ", label: "Mizoram" },
    { value: "NL", label: "Nagaland" },
    { value: "OD", label: "Odisha" },
    { value: "PB", label: "Punjab" },
    { value: "RJ", label: "Rajasthan" },
    { value: "SK", label: "Sikkim" },
    { value: "TN", label: "Tamil Nadu" },
    { value: "TS", label: "Telangana" },
    { value: "TR", label: "Tripura" },
    { value: "UK", label: "Uttarakhand" },
    { value: "UP", label: "Uttar Pradesh" },
    { value: "WB", label: "West Bengal" },
    { value: "AN", label: "Andaman and Nicobar Islands" },
    { value: "CH", label: "Chandigarh" },
    { value: "DN", label: "Dadra and Nagar Haveli" },
    { value: "DD", label: "Daman and Diu" },
    { value: "DL", label: "Delhi" },
    { value: "LD", label: "Lakshadweep" },
    { value: "PY", label: "Puducherry" }
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Issue Details</h3>
          
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Issue Title</FormLabel>
                <FormControl>
                  <Input placeholder="Broken Street Light" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Issue Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe the issue in detail..." 
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Location Information</h3>
          
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Location</FormLabel>
                <FormControl>
                  <Input placeholder="Outside ABC Apartments, Gandhi Road" {...field} />
                </FormControl>
                <FormDescription>
                  Provide specific landmarks or street addresses
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state.value} value={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Mumbai" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pinCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PIN Code</FormLabel>
                  <FormControl>
                    <Input placeholder="400001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Upload Images</h3>
          <div className="border-2 border-dashed rounded-md border-gray-300 p-6 text-center">
            <label htmlFor="images" className="cursor-pointer flex flex-col items-center">
              <Image className="h-12 w-12 text-gray-400" />
              <span className="mt-2 block text-sm font-medium">
                Upload up to 5 images (Click to browse)
              </span>
              <span className="mt-1 block text-xs text-gray-500">
                PNG, JPG, JPEG up to 5MB each
              </span>
            </label>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="sr-only"
            />
          </div>
          
          {uploadError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{uploadError}</AlertDescription>
            </Alert>
          )}
          
          {isSubmitting && uploadProgress > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-primary h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="text-xs text-center mt-1">Uploading images: {Math.round(uploadProgress)}%</p>
            </div>
          )}
          
          {images.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">{images.length} image{images.length > 1 ? 's' : ''} selected</p>
              <div className="flex flex-wrap gap-2">
                {Array.from(images).map((img, i) => (
                  <div key={i} className="relative h-16 w-16 rounded-md overflow-hidden">
                    <img 
                      src={URL.createObjectURL(img)} 
                      alt={`Preview ${i}`}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>
          <p className="text-sm text-muted-foreground">
            Your contact information will only be visible to government officials
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Rahul Sharma" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="9876543210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="rahul.sharma@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Report"
          )}
        </Button>
      </form>
    </Form>
  );
}
