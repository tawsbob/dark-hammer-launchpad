
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useTranslation } from '@/hooks/useTranslation';

// Add gtag declaration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface LeadDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadDialog = ({ isOpen, onClose }: LeadDialogProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in real app this would go to /api/leads
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Fire GA4 event for waitlist
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'lead_waitlist', {
          event_category: 'conversion',
          event_label: 'waitlist_signup',
          value: 1
        });
      }

      console.log('Waitlist lead captured:', formData);
      
      toast.success("Welcome to the waitlist!", {
        description: "You're now on the Dark Hammer beta list. We'll be in touch soon.",
        duration: 4000
      });
      
      setFormData({ name: '', email: '', phone: '' });
      
      // Keep dialog open for 1 second then close
      setTimeout(() => {
        onClose();
      }, 1000);
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md surface-container-high border border-red-700/30 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-title-large text-center mb-2 text-white">
            Join the Waitlist
          </DialogTitle>
          <p className="text-body-medium text-center text-gray-300">
            We're finalizing the MVP. Drop your info and get notified the moment test slots open.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-label-large text-white">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="rounded-lg border-red-700/30 bg-gray-900 text-white focus:border-red-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-label-large text-white">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="rounded-lg border-red-700/30 bg-gray-900 text-white focus:border-red-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-label-large text-white">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
              className="rounded-lg border-red-700/30 bg-gray-900 text-white focus:border-red-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
            
            <div className="text-xs text-gray-500">
              Privacy • We never sell your data
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
