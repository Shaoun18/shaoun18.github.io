import { useState, type FormEvent } from 'react';
import Section, { Reveal } from './Section';

type Status = { kind: 'idle' | 'sending' | 'ok' | 'err'; msg?: string };

export default function Contact() {
  const [st, setSt] = useState<Status>({ kind: 'idle' });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSt({ kind: 'sending' });
    try {
      const emailjs = (await import('@emailjs/browser')).default; // loaded only when someone sends a message
      await emailjs.sendForm('service_g5c0tlz', 'template_i9cz6sb', form, { publicKey: '_zaPKtVyBE8T5Q5l9' });
      form.reset();
      setSt({ kind: 'ok', msg: 'Message sent. I will reply to your email soon.' });
    } catch {
      setSt({ kind: 'err', msg: 'The message did not send. Check your connection and try again, or email me directly.' });
    }
  }

  return (
    <Section id="contact" title="Get in touch">
      <Reveal className="card-form">
        <form onSubmit={submit}>
          <label>Your name<input type="text" name="from_name" autoComplete="name" placeholder="Your name" required /></label>
          <label>Your email<input type="email" name="reply_to" autoComplete="email" placeholder="example@gmail.com" required /></label>
          <label>Message<textarea name="message" rows={5} placeholder="Tell me about your project…" required /></label>
          <button className="btn primary" type="submit" disabled={st.kind === 'sending'}>
            {st.kind === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          <p className={`status ${st.kind}`} role="status" aria-live="polite">{st.msg}</p>
        </form>
      </Reveal>
    </Section>
  );
}
