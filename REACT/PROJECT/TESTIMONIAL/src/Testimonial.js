import { useState } from "react";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      quote:
        "Life is not measured by the breaths we take, but by the moments that take our breath away.",
      author: "Maya Angelou",
    },
    {
      quote: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle",
    },
    {
      quote:
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote: "To love and be loved is to feel the sun from both sides.",
      author: "David Viscott",
    },
    {
      quote:
        "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "Love doesn't make the world go round. Love is what makes the ride worthwhile.",
      author: "Franklin P. Jones",
    },
    {
      quote: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
  ];

  const prev = () => {
    setIndex(index > 0 ? index - 1 : index);
  };
  const next = () => {
    setIndex(index < testimonials.length - 1 ? index + 1 : index);
  };
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-quote">"{testimonials[index].quote}"</div>
        <div className="testimonial-author">- {testimonials[index].author}</div>
        <div className="nav">
          <button onClick={() => prev()}>Prev</button>
          <button onClick={() => next()}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
