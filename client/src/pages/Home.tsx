import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Copy, Download, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface BusinessContext {
  businessName: string;
  location: string;
  traffic: string;
  transit: string;
  keyChallenge: string;
}

export default function Home() {
  const [businessContext, setBusinessContext] = useState<BusinessContext>({
    businessName: "",
    location: "",
    traffic: "",
    transit: "",
    keyChallenge: "",
  });

  const [generatedPlaybook, setGeneratedPlaybook] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: keyof BusinessContext, value: string) => {
    setBusinessContext((prev) => ({ ...prev, [field]: value }));
  };

  const generatePlaybook = () => {
    setIsGenerating(true);
    
    // Simulate generation with a delay
    setTimeout(() => {
      const playbook = `# Marketing & SEO Playbook for ${businessContext.businessName || "[Your Business]"}

## Core Brand Identity & Positioning

${businessContext.businessName || "[Your Business]"} stands as a premier destination entertainment experience, strategically positioned ${businessContext.location || "[location details]"}. As a destination-driven escape room, we embrace our unique positioning: visitors don't stumble upon us—they choose us. This intentionality transforms every booking into a commitment, and every visit into an event worth planning. Our brand identity centers on being the "worth the drive" adventure that turns an ordinary day into an extraordinary memory. We position ourselves not as a casual drop-in activity, but as the centerpiece of a planned outing—a destination that justifies the journey.

## Target Personas & Pain Points

**The Corporate Team Builder**: HR managers and team leads seeking unique, engaging team-building experiences that go beyond the typical trust falls and conference room activities. They struggle with ${businessContext.keyChallenge || "seasonal availability and budget constraints"}, needing venues that can accommodate groups while delivering measurable engagement and memorable experiences that strengthen team dynamics.

**The Experience Curator**: Individuals aged 25-40 who pride themselves on discovering and sharing unique local experiences. They face decision paralysis from too many entertainment options and fear wasting time or money on mediocre activities. They need social proof, authentic reviews, and compelling narratives that justify the drive and investment for their friend groups or date nights.

**The Celebration Planner**: Parents, partners, and friends organizing milestone celebrations (birthdays, anniversaries, bachelor/bachelorette parties) who are overwhelmed by generic party options. They're challenged by ${businessContext.keyChallenge || "coordinating schedules and finding activities that appeal to diverse age groups"}, requiring venues that offer private experiences, flexible booking, and "Instagram-worthy" moments that make their event feel special.

## Voice of Customer Website Copy

### Homepage Headline
"Your Next Unforgettable Adventure Awaits—Worth Every Minute of the Drive"

### Homepage Sub-headline
"Located ${businessContext.location || "just minutes from the city"}, ${businessContext.businessName || "our escape room"} transforms ordinary days into extraordinary memories. ${businessContext.traffic || "No foot traffic means"} every visit is intentional, every puzzle is crafted with care, and every escape is an achievement worth celebrating. Book your adventure today and discover why groups travel from across the region to experience our immersive challenges."

### Google Business Profile Description
"${businessContext.businessName || "[Your Escape Room]"} is a premier destination escape room experience ${businessContext.location || "serving the greater region"}. Specializing in immersive, story-driven adventures, we offer meticulously designed rooms that challenge teams, families, and friends to solve intricate puzzles in themed environments. ${businessContext.transit || "While we're off the beaten path"}, our location ensures a focused, distraction-free experience that makes every visit memorable. Perfect for corporate team-building events, birthday celebrations, date nights, and group outings. Advanced booking required—${businessContext.traffic || "we're a destination worth planning for"}. Multiple difficulty levels available. Private bookings and group packages offered. Rated as one of the region's top entertainment destinations by visitors who appreciate quality over convenience."

## The 'Stop Doing / Start Doing' List

### Stop Doing (Failed Tactics from Destination Escape Room Owners)

- **Stop relying on walk-by traffic or last-minute bookings**: Destination businesses require advance planning. Optimize for intentional discovery through search and social proof, not impulse visits.

- **Stop competing on price with urban competitors**: Your value isn't in being the cheapest—it's in being worth the journey. Race-to-the-bottom pricing undermines your positioning as a premium destination experience.

- **Stop generic social media posting without strategic intent**: Random posts about "book now" or "fun times" don't address the core objection: "Is this worth driving to?" Every post must reinforce destination value.

- **Stop neglecting Google Business Profile optimization**: For destination businesses, your GBP is often the first impression. Incomplete profiles, missing photos, or unanswered reviews signal unprofessionalism and reduce booking confidence.

- **Stop ignoring email list building and nurturing**: One-time visitors are leaving money on the table. Without capturing emails and nurturing return visits or referrals, you're constantly hunting for new customers instead of leveraging your best advocates.

### Start Doing (Proven Successful Tactics)

- **Start building strategic partnerships with complementary businesses**: Connect with nearby restaurants, hotels, breweries, and tourism boards to create "destination packages" that make the drive more appealing and extend visitor dwell time in your area.

- **Start creating content that sells the journey, not just the room**: Blog posts, videos, and social content should address "what else can we do nearby?", "how long is the drive?", and "what makes this worth the trip?" Position your business as the anchor of a memorable outing.

- **Start leveraging user-generated content and testimonials aggressively**: Social proof is critical for destination businesses. Actively solicit reviews, create shareable moments in your rooms, and feature customer stories that emphasize "worth the drive" narratives across all channels.

- **Start implementing dynamic seasonal pricing and packaging**: Combat ${businessContext.keyChallenge || "seasonal slumps"} by creating compelling off-peak offers: "Winter Escape Packages," "Locals Appreciation Rates," or "Shoulder Season Challenges" that incentivize bookings during slow periods without devaluing peak times.

- **Start building an email nurture sequence for past visitors**: Automate re-engagement campaigns that invite return visits, encourage gift certificate purchases, and solicit referrals. Include exclusive "alumni" offers and early access to new rooms to build loyalty and recurring revenue.

- **Start optimizing for "things to do near [city]" and long-tail destination searches**: Your SEO should target people planning outings, not people already in your parking lot. Focus on content and keywords around regional activities, day trip planning, and unique experiences within driving distance of major population centers.

- **Start tracking and optimizing your booking funnel relentlessly**: From discovery to confirmation, every step should reduce friction and reinforce value. Implement abandoned cart emails, simplify booking flows, and ensure mobile optimization—your customers are researching and booking on the go.

## Seasonal Marketing Plan

| **Peak Season Actions** | **Slow Season Actions** |
|-------------------------|-------------------------|
| **Maximize Capacity & Premium Pricing**: Implement surge pricing for weekends and holidays. Promote premium add-ons (private bookings, extended time, themed packages) to increase average transaction value during high-demand periods. | **Drive Off-Peak Bookings with Incentives**: Launch "Escape the Winter Blues" or "Shoulder Season Specials" campaigns offering 15-20% discounts for weekday bookings. Create urgency with limited-time offers to convert hesitant planners. |
| **Leverage Group & Corporate Bookings**: Target corporate team-building budgets with dedicated outreach campaigns. Offer group packages and corporate rates. Highlight team-building benefits in LinkedIn ads and email campaigns to HR managers and team leads. | **Focus on Locals & Repeat Visitors**: Create "Locals Appreciation" campaigns with exclusive rates for residents. Launch email campaigns targeting past visitors with "You've Conquered [Room Name]—Ready for Your Next Challenge?" messaging to drive repeat bookings. |
| **Amplify Social Proof & UGC**: Run social media campaigns encouraging visitors to share their experiences with branded hashtags. Feature customer testimonials and photos prominently on website and ads. Leverage peak-season momentum to build content库 for off-season use. | **Invest in Content Marketing & SEO**: Publish blog content targeting long-tail keywords like "best winter activities near [city]" or "unique date ideas [region]." Build authority and organic traffic to support future peak seasons. |
| **Expand Partnership Visibility**: Collaborate with hotels, tourism boards, and event planners to secure referrals and package deals. Ensure your business is featured in regional "things to do" guides and visitor center materials. | **Test & Optimize Digital Campaigns**: Use slower periods to experiment with new ad creative, landing pages, and audience segments. Lower competition means cheaper clicks—use this time to refine your funnel and messaging for the next peak season. |
| **Capture Emails Aggressively**: Implement exit-intent popups, post-visit email capture, and gift certificate promotions to build your list during high-traffic months. Every peak-season visitor is a potential off-season repeat customer. | **Launch Gift Certificate & Future Booking Campaigns**: Promote gift certificates for upcoming holidays and special occasions. Offer "Book Now, Visit Later" deals with flexible scheduling to secure revenue during slow months while filling future calendar slots. |

---

**Implementation Note**: This playbook is designed specifically for destination escape room businesses facing ${businessContext.keyChallenge || "seasonal challenges and location-based constraints"}. Success requires consistent execution across all channels, with particular emphasis on building systems (email automation, partnership networks, content calendars) during peak seasons that will sustain you through slower periods. Track metrics relentlessly: cost per booking, customer lifetime value, repeat visit rates, and seasonal revenue patterns. Adjust tactics quarterly based on data, and remember—your greatest competitive advantage is being worth the journey.`;

      setGeneratedPlaybook(playbook);
      setIsGenerating(false);
      toast.success("Playbook generated successfully!");
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPlaybook);
    toast.success("Copied to clipboard!");
  };

  const downloadPlaybook = () => {
    const blob = new Blob([generatedPlaybook], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${businessContext.businessName || "escape-room"}-playbook.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Playbook downloaded!");
  };

  const resetForm = () => {
    setBusinessContext({
      businessName: "",
      location: "",
      traffic: "",
      transit: "",
      keyChallenge: "",
    });
    setGeneratedPlaybook("");
    toast.info("Form reset");
  };

  const isFormValid = businessContext.businessName && businessContext.location;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Escape Room Playbook Generator
              </h1>
              <p className="text-sm text-muted-foreground">
                Create customized marketing & SEO playbooks for destination escape rooms
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <Tabs defaultValue="input" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="input">Business Context</TabsTrigger>
            <TabsTrigger value="output" disabled={!generatedPlaybook}>
              Generated Playbook
            </TabsTrigger>
          </TabsList>

          {/* Input Tab */}
          <TabsContent value="input" className="space-y-6">
            <Card className="max-w-3xl mx-auto shadow-lg">
              <CardHeader>
                <CardTitle>Enter Your Business Details</CardTitle>
                <CardDescription>
                  Provide information about your escape room business to generate a tailored marketing playbook
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">
                    Business Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="businessName"
                    placeholder="e.g., Mystery Manor Escape Room"
                    value={businessContext.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">
                    Location <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g., 15-20 minutes driving from Peterborough"
                    value={businessContext.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="traffic">Foot Traffic Situation</Label>
                  <Textarea
                    id="traffic"
                    placeholder="e.g., Zero foot traffic. All visitors must make a planned decision to drive to us."
                    value={businessContext.traffic}
                    onChange={(e) => handleInputChange("traffic", e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transit">Public Transit Availability</Label>
                  <Textarea
                    id="transit"
                    placeholder="e.g., No public transit is available."
                    value={businessContext.transit}
                    onChange={(e) => handleInputChange("transit", e.target.value)}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keyChallenge">Key Business Challenge</Label>
                  <Textarea
                    id="keyChallenge"
                    placeholder="e.g., Severe seasonal slumps in shoulder seasons and post-holiday drought."
                    value={businessContext.keyChallenge}
                    onChange={(e) => handleInputChange("keyChallenge", e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={generatePlaybook}
                    disabled={!isFormValid || isGenerating}
                    className="flex-1"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Playbook
                      </>
                    )}
                  </Button>
                  <Button onClick={resetForm} variant="outline" size="lg">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Voice of Customer</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Get website copy based on authentic customer insights from industry forums and owner experiences
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proven Tactics</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Learn what works and what doesn't from successful destination entertainment businesses
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Seasonal Strategy</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Combat seasonal slumps with targeted marketing actions for peak and slow periods
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Output Tab */}
          <TabsContent value="output" className="space-y-6">
            <Card className="max-w-5xl mx-auto shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Your Marketing & SEO Playbook</CardTitle>
                    <CardDescription>
                      Customized for {businessContext.businessName || "your business"}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={copyToClipboard} variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button onClick={downloadPlaybook} variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none bg-muted/30 rounded-lg p-6">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {generatedPlaybook}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>
            Built for destination escape room businesses • Generate customized marketing playbooks in seconds
          </p>
        </div>
      </footer>
    </div>
  );
}

