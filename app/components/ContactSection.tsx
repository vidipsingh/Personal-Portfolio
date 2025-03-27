import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Card } from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  // const form = useForm<FormValues>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   },
  // });

  // function onSubmit(values: FormValues) {
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     console.log(values);
  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for your message. I'll get back to you soon.",
  //     });
  //     form.reset();
  //     setIsSubmitting(false);
  //   }, 1000);
  // }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#0984E3] mx-auto mt-4"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-12">
          <div className="md:w-2/3">
            <Card className="p-8">
              <h3 className="text-xl font-semibold font-inter mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-[#0984E3]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p>vidip2025.gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-[#0984E3]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p>+91 9971332181</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-[#0984E3]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p>Ghaziabad (U.P), India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Connect with me:</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/vidipsingh" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0984E3] hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vidip-singh-a0aa5b23b/" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0984E3] hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://x.com/vidip2025" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0984E3] hover:text-white transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
