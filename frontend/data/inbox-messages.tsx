export type Message = {
  id: number;
  sender: string;
  subject: string;
  date: number;
  snippet: string;
  read: boolean;
};

export const messages: Message[] = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting Reminder",
    date: 1696118400000,
    snippet: "Don't forget about our meeting tomorrow at 10 AM.",
    read: false,
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Project Update",
    date: 1696204800000,
    snippet: "Here's the latest update on the project...",
    read: false,
  },
  {
    id: 3,
    sender: "Alice Johnson",
    subject: "Invoice",
    date: 1696291200000,
    snippet: "Please find attached the invoice for last month.",
    read: true,
  },
  {
    id: 4,
    sender: "Bob Brown",
    subject: "Vacation Request",
    date: 1696377600000,
    snippet: "I would like to request vacation from Oct 10 to Oct 20.",
    read: true,
  },
  {
    id: 5,
    sender: "Charlie Davis",
    subject: "New Project Proposal",
    date: 1696464000000,
    snippet: "I have a new project proposal for you to review.",
    read: true,
  },
  {
    id: 6,
    sender: "Diana Evans",
    subject: "Weekly Report",
    date: 1696550400000,
    snippet: "Here is the weekly report for your review.",
    read: true,
  },
  {
    id: 7,
    sender: "Ethan Foster",
    subject: "Client Feedback",
    date: 1696636800000,
    snippet: "We received feedback from the client on the recent project.",
    read: true,
  },
  {
    id: 8,
    sender: "Fiona Green",
    subject: "Team Meeting Notes",
    date: 1696723200000,
    snippet: "Please find the notes from the last team meeting attached.",
    read: true,
  },
];
