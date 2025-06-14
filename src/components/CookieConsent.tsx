
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <Card className="max-w-md mx-auto p-4 bg-white shadow-lg border-2">
        <div className="flex items-start space-x-3">
          <Cookie className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-sm mb-2">Cookie Consent</h3>
            <p className="text-xs text-gray-600 mb-3">
              We use cookies to enhance your experience, including analytics and advertising cookies 
              from Google AdSense/DoubleClick. By continuing, you consent to our use of cookies as 
              described in our Privacy Policy.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" onClick={acceptCookies} className="text-xs">
                Accept All
              </Button>
              <Button size="sm" variant="outline" onClick={declineCookies} className="text-xs">
                Decline
              </Button>
            </div>
          </div>
          <button
            onClick={declineCookies}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
