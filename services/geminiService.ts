import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the official Virtual Assistant for SHREESVARN FINNOVOTION PRIVATE LIMITED (SFPL). 
Your tone is professional, corporate, and authoritative.

Company Identity:
- Legal Name: SHREESVARN FINNOVOTION PRIVATE LIMITED (SFPL)
- Registered HQ Address: No 284, Neha Nagar, Makroniya, Sagar, Madhya Pradesh - 470004, India.
- CIN (Corporate Identity Number): U46511MP2023PTC066911
- GSTIN (GST Registration): 23ABLCS3566J1ZZ (Effective Date: 03/07/2025)
- Udyam MSME Registration Number: UDYAM-MP-39-0031057
- Startup India Recognition Number: DIPP204739 (Issued: 23-05-2025, Valid Upto: 27-07-2033, Sector: Construction & Engineering)
- PAN (Permanent Account Number): ABLCS3566J
- GeM Seller ID: PK7W240011789835
- Contact Details: Phone: +91 8602467804, Email: info@shreesvarn.com / nikhilkushwaha8022@gmail.com
- Date of Incorporation: 28/07/2023

Executive Leadership:
- Founder & Director: Nikhil Kushwaha (Technology, Infrastructure Planning, Strategic Execution).
- Co-Founder: Neetesh Yadav (Management Expert, Corporate Strategy, Organizational Growth).
- CEO: Pranav Sing Kushwaha (Tender Expert, Construction Management, Operational Excellence).

SFPL is a multi-sector conglomerate operating in:

1. Software & Technology:
   - Products: CRM Solutions, Call Center Suites, AI Automation Tools, Lead Management Systems, Stock Advisory OS, Custom Android OS.
   - Services: Custom Software Development, Web/App Development, Cloud Deployment, AI/ML Solutions.
2. Civil Construction:
   - Infrastructure: Road Construction (Asphalt/Concrete), Bridges & Culverts, Public Utilities, Urban Infrastructure.
   - Structural: Residential/Commercial Buildings, Industrial Construction, Renovation.
3. Rural & Urban Development:
   - Smart Village Planning, Farmer Networks, Agriculture Infrastructure.
   - Urban: Water Management, Drainage, Waste Management, Sanitation.
4. Real Estate:
   - Land Acquisition, Land Development, Leasing, Residential & Commercial Projects, Joint Ventures.
5. Consulting & Advisory:
   - Tender & Bid Consulting, Government Liaison, DPR & Feasibility Reports, Digital Transformation.

Your goal is to answer inquiries, guide users to the right department, and collect basic details for leads.
Keep answers concise (under 100 words).
If asked about specific software pricing or land rates, suggest contacting the sales team via the contact form.
`;

const getLocalResponse = (message: string): string => {
  const query = message.toLowerCase();

  if (query.includes('nikhil') || query.includes('neetesh') || query.includes('pranav') || query.includes('founder') || query.includes('ceo') || query.includes('leadership') || query.includes('management') || query.includes('director') || query.includes('owner')) {
    return "SFPL is directed by an elite executive board:\n\n" +
           "• Nikhil Kushwaha (Founder & Director): Spearheads Technology, Infrastructure Planning, and Strategic Digital Assemblies.\n" +
           "• Neetesh Yadav (Co-Founder): Directs Corporate Strategy, Operational Logistics, and Organizational Scaling.\n" +
           "• Pranav Sing Kushwaha (CEO): Leads Construction Operations, PWD Tendering, and Civil Project Execution.";
  }

  if (query.includes('software') || query.includes('crm') || query.includes('tech') || query.includes('android') || query.includes('call center') || query.includes('automation') || query.includes('app') || query.includes('web')) {
    return "Our Software & Technology Vertical delivers high-performance enterprise tools, including:\n\n" +
           "• Enterprise CRM & Lead Management Suites\n" +
           "• Dedicated Voice Call Center systems & dialer engines\n" +
           "• Hardened Custom Android OS installations for field staff data security\n" +
           "• Custom web portals, database systems, and mobile applications.\n\n" +
           "For licensing quotes and system deployment, please fill out our Contact Form.";
  }

  if (query.includes('civil') || query.includes('construction') || query.includes('road') || query.includes('bridge') || query.includes('tender') || query.includes('machinery') || query.includes('highway') || query.includes('infrastructure')) {
    return "SFPL is a premier, Class-A registered state contractor specialized in Civil Construction:\n\n" +
           "• Asphalt & Concrete Roadways and National Highway segments\n" +
           "• Structural Bridges, Culverts, and Drainage Utilities\n" +
           "• High-rise commercial, residential, and industrial layouts\n" +
           "• Owned heavy machinery fleet (excavators, pavers, concrete batching plants).\n\n" +
           "We actively engage in Joint Venture (JV) bids. Please reach our Tender Desk in the Contact section.";
  }

  if (query.includes('real estate') || query.includes('land') || query.includes('plot') || query.includes('property') || query.includes('township') || query.includes('acquisition') || query.includes('joint venture') || query.includes('lease')) {
    return "Our Real Estate Vertical excels in strategic land acquisition and layout planning:\n\n" +
           "• Comprehensive title search verification and 30-year litigation check audits\n" +
           "• Strategic land banking along prime highway corridors\n" +
           "• Joint development ventures and investor township layouts.\n\n" +
           "Contact our Real Estate advisory board via the support desk for listings and acquisition proposals.";
  }

  if (query.includes('rural') || query.includes('urban') || query.includes('village') || query.includes('farmer') || query.includes('agriculture') || query.includes('cooperative') || query.includes('solars')) {
    return "SFPL Rural & Urban Development operates with a social-impact framework:\n\n" +
           "• Smart Village utilities, sanitation, and water treatment loops\n" +
           "• Solar-powered irrigation microgrids for rural cooperative networks\n" +
           "• Agrarian support hubs providing direct farmer-to-distributor logistics to boost margins.\n\n" +
           "We partner with rural cooperatives and local municipal bodies to expand grassroots utility systems.";
  }

  if (query.includes('consulting') || query.includes('advisory') || query.includes('dpr') || query.includes('feasibility') || query.includes('liaison') || query.includes('clearance') || query.includes('noc')) {
    return "Our Strategic Consulting Desk delivers high-precision dossier formulation:\n\n" +
           "• Technical bid formulation and eligibility audits for large government tenders\n" +
           "• Detailed Project Reports (DPR) incorporating cost estimations and 10-year cash flows\n" +
           "• Government liaison support for zoning, clearances, and NOC board filings.\n\n" +
           "Use our Scope Planner on the Consulting page to instantly draft a custom roadmap!";
  }

  if (query.includes('contact') || query.includes('phone') || query.includes('email') || query.includes('address') || query.includes('office') || query.includes('location') || query.includes('headquarters') || query.includes('call') || query.includes('sagar')) {
    return "You can get in touch with our administrative desk using the coordinates below:\n\n" +
           "• Registered HQ Address: No 284, Neha Nagar, Makroniya, Sagar, Madhya Pradesh - 470004, India\n" +
           "• Direct Dial / Mobile: +91 8602467804\n" +
           "• Email Inquiries: info@shreesvarn.com / nikhilkushwaha8022@gmail.com / info@sfplofficial.com\n\n" +
           "You can also submit your specific requirements through our online contact page.";
  }

  if (query.includes('cin') || query.includes('gst') || query.includes('pan') || query.includes('msme') || query.includes('udyam') || query.includes('startup') || query.includes('registration') || query.includes('gem') || query.includes('verification')) {
    return "Here are the official registry credentials for SHREESVARN FINNOVOTION PRIVATE LIMITED:\n\n" +
           "• Corporate Identity Number (CIN): U46511MP2023PTC066911\n" +
           "• GST Registration Number (GSTIN): 23ABLCS3566J1ZZ\n" +
           "• MSME Udyam Registration: UDYAM-MP-39-0031057\n" +
           "• Startup India Recognition Number: DIPP204739 (Valid Upto: 27-07-2033)\n" +
           "• Permanent Account Number (PAN): ABLCS3566J\n" +
           "• GeM Seller ID: PK7W240011789835\n" +
           "• Date of Incorporation: 28/07/2023\n" +
           "• Registered Office: No 284, Neha Nagar, Makroniya, Sagar, MP, 470004.";
  }

  if (query.includes('download') || query.includes('brochure') || query.includes('profile') || query.includes('pdf') || query.includes('document')) {
    return "You can access certified company profiles, compliance files, and technical brochures in our Download Center. Restricted tender documents can also be requested securely there.";
  }

  return "Thank you for reaching out to SHREESVARN FINNOVOTION PRIVATE LIMITED (SFPL).\n\n" +
         "I can assist you with details regarding our Business Verticals (Software, Civil Construction, Rural Development, Real Estate), Executive Leadership, and Consulting services.\n\n" +
         "Could you please specify your department of interest, or ask about our branch office coordinates?";
};

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  if (!apiKey || apiKey.trim() === '') {
    // Graceful offline local rule-based fallback response
    return getLocalResponse(message);
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a chat session
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || getLocalResponse(message);
  } catch (error) {
    console.error("Gemini API Error, falling back to local responder:", error);
    return getLocalResponse(message);
  }
};