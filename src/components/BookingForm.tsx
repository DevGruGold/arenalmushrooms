
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [people, setPeople] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const generateWhatsAppMessage = () => {
    const formattedDate = date ? format(date, 'MMMM dd, yyyy') : 'a date to be confirmed';
    const peopleCount = people || 'a group';
    const requests = specialRequests ? ` Additional details: ${specialRequests}` : '';
    
    return `Hi! I'd like to book a farm tour for ${peopleCount} people on ${formattedDate}.${requests} Looking forward to visiting Arenal Mushrooms!`;
  };

  const handleBookTour = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/50687090777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = date && people;

  return (
    <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-green-800">Book Your Farm Tour</CardTitle>
        <CardDescription>
          Experience sustainable farming and taste fresh gourmet mushrooms
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="date">Select Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="people">Number of People</Label>
          <Select value={people} onValueChange={setPeople}>
            <SelectTrigger>
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 person</SelectItem>
              <SelectItem value="2">2 people</SelectItem>
              <SelectItem value="3">3 people</SelectItem>
              <SelectItem value="4">4 people</SelectItem>
              <SelectItem value="5">5 people</SelectItem>
              <SelectItem value="6">6 people</SelectItem>
              <SelectItem value="7">7 people</SelectItem>
              <SelectItem value="8">8 people</SelectItem>
              <SelectItem value="9">9 people</SelectItem>
              <SelectItem value="10">10 people</SelectItem>
              <SelectItem value="10+">More than 10 people</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="requests">Special Requests (Optional)</Label>
          <Textarea
            id="requests"
            placeholder="Dietary restrictions, special occasions, accessibility needs..."
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="min-h-[80px]"
          />
        </div>

        <Button 
          onClick={handleBookTour}
          disabled={!isFormValid}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
        >
          Book via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
