export default function Hero() {
  return (
    <section className="text-text font-subheading px-6 py-12">
      <h1 className="text-4xl font-heading font-bold text-primary">Welcome to the Assignment</h1>
      <p className="text-lg mt-4 max-w-xl">This is the newsletter form section.</p>
      <form className="mt-6 space-y-4">
        <input type="email" placeholder="Your email" className="border p-2 w-full" />
        <button type="submit" className="bg-secondary text-white px-4 py-2 hover:bg-primary transition">
          Subscribe
        </button>
      </form>
    </section>
  );
}
