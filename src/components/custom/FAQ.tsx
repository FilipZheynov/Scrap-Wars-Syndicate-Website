import Foldable from "../ui/Foldable"
import { ScrollReveal } from "./ScrollReveal"

interface FAQData {
    question: string;
    answer: string;
  }
  
  const faqContent: FAQData[] = [
    {
      question: "What is Scrap Wars Syndicate?",
      answer: "A global community for Scrap Mechanic players to compete and innovate."
    },
    {
      question: "How do I participate?",
      answer: "Join our Discord and check the #announcements channel for the next events."
    },
    {
        question: "When are events held?",
        answer: "Events are held everyday friday/saturday, with a vote happening to decide the day."
    },
    {
        question: "How long is an event?",
        answer: "One event is usually around 1-2 hours."
    },
    {
        question: "Do i need my own creations?",
        answer: "Nobody is forcing you to use or build your own creations, but you cannot use workshop creations."
    }
  ];
  
  export default function FAQ() {
    return (
        
      <section className="max-w-4xl mx-auto p-6 -mt-15">
        <ScrollReveal><h1 className="text-center font-headings page-subtitle">FAQ</h1></ScrollReveal>
        <ScrollReveal>{faqContent.map((item, index) => (
          <Foldable key={index} title={item.question}>
            {item.answer}
          </Foldable>
        ))}</ScrollReveal>
      </section>
    );
  }