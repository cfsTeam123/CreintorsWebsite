
/**
 * Designed & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 */

import { useRef, useState, type FormEvent } from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "libphonenumber-js";
import "react-phone-number-input/style.css";

import Field from "./Field";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [phone, setPhone] = useState<string | undefined>();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "sending" || status === "sent") return;

    setErrorMessage("");

    // Validate international phone number
    if (!phone || !isValidPhoneNumber(phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid mobile number with country code.");
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      department: String(formData.get("department") || ""),
      mobile: phone,
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      let result: { success?: boolean; message?: string };

      try {
        result = JSON.parse(responseText);
      } catch {
        console.error(
          "Invalid API response:",
          response.status,
          responseText
        );

        throw new Error(
          `Server returned an invalid response (${response.status}). Please try again later.`
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message. Please try again."
        );
      }

      setStatus("sent");
      form.reset();
      setPhone(undefined);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    }
  };

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at var(--mx) var(--my), rgba(23,158,224,0.30), transparent 60%)",
        }}
      />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-8 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25),0_0_0_1px_rgba(255,255,255,0.85)_inset] md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(23,158,224,0.85), rgba(70,54,127,0.7), transparent)",
            boxShadow: "0 0 12px rgba(23,158,224,0.45)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px at var(--mx) var(--my), rgba(23,158,224,0.10), transparent 60%)",
          }}
        />

        <div className="relative">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-brand-600">
                Send a message
              </div>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                Let's start a conversation.
              </h2>
            </div>
          </div>

          <form onSubmit={submit} className="mt-7 flex flex-col gap-5">
            {/* Contact Details */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              <Field
                label="Your name"
                name="name"
                placeholder="Jane Engineer"
                required
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />

              <Field
                label="Company"
                name="company"
                placeholder="Your organisation"
                required
              />

              {/* Department */}
              <label className="group relative block">
                <span className="mb-2 block text-xs uppercase tracking-[0.32em] text-slate-500 transition group-focus-within:text-brand-600">
                  Department
                </span>

                <select
                  name="department"
                  defaultValue=""
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(23,158,224,0.12)]"
                >
                  <option value="" disabled>
                    Choose a company
                  </option>
                  <option value="general">General Enquiry</option>
                  <option value="Creintors">Creintors Test Rigs</option>
                  <option value="cautomate">C-Automate Automation</option>
                  <option value="crienviro">Crienviro Water Treatment</option>
                  <option value="education">3i Ecosystem Education</option>
                  <option value="careers">Careers</option>
                </select>
              </label>

              {/* International Mobile Number */}
              <label className="group relative block">
                <span className="mb-2 block text-xs uppercase tracking-[0.32em] text-slate-500 transition group-focus-within:text-brand-600">
                  Mobile Number
                </span>

                <div className="flex min-h-[58px] items-center rounded-2xl border border-slate-200 bg-white px-4 transition focus-within:border-brand-500 focus-within:shadow-[0_0_0_4px_rgba(23,158,224,0.12)]">
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={phone}
                    onChange={setPhone}
                    placeholder="Enter mobile number"
                    className="w-full gap-2 [&_.PhoneInputCountry]:mr-2 [&_.PhoneInputInput]:min-w-0 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:text-base [&_.PhoneInputInput]:text-slate-900 [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:placeholder:text-slate-400"
                  />
                </div>
              </label>
            </div>

            {/* Message */}
            <Field
              label="What can we engineer for you?"
              name="message"
              textarea
              rows={4}
              placeholder="Tell us a little about the project…"
              required
            />

            {/* Honeypot field to discourage simple bots */}
            <div
              aria-hidden="true"
              className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="contact-website">
                Leave this field empty
              </label>

              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  background:
                    "linear-gradient(120deg, #179ee0 0%, #46367f 100%)",
                  boxShadow: "0 18px 40px -12px rgba(23,158,224,0.55)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                />

                {status === "idle" && (
                  <>
                    <span className="relative">Send Message</span>
                    <span
                      aria-hidden
                      className="relative transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                      →
                    </span>
                  </>
                )}

                {status === "sending" && (
                  <span className="relative">Sending…</span>
                )}

                {status === "sent" && (
                  <span className="relative">Received ✓</span>
                )}

                {status === "error" && (
                  <span className="relative">Try Again</span>
                )}
              </button>

              <p className="text-xs text-slate-500">
                By submitting, you agree to be contacted by Creintors Group.
              </p>
            </div>

            {/* Success Message */}
            {status === "sent" && (
              <p role="status" className="text-sm text-green-700">
                Thank you! Your enquiry has been sent successfully.
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
