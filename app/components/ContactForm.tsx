'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert("Form submitted! Check console.");
    console.log(data);
  };

  return (
    <section className="px-6 py-12 text-text font-subheading">
      <h2 className="text-3xl font-heading font-bold text-primary">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4 max-w-xl">
        <input {...register('name')} placeholder="Name" className="border p-2 w-full" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        <input {...register('email')} placeholder="Email" className="border p-2 w-full" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        <textarea {...register('message')} placeholder="Message" className="border p-2 w-full h-32" />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        <button type="submit" className="bg-secondary text-white px-4 py-2 hover:bg-primary transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
