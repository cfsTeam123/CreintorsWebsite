type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  /** Textarea height in rows. Ignored for inputs. */
  rows?: number;
  required?: boolean;
};

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(23,158,224,0.12)]";

export default function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
  rows = 5,
  required,
}: FieldProps) {
  return (
    <label className="group relative block">
      <span className="mb-2 block text-xs uppercase tracking-[0.32em] text-slate-500 transition group-focus-within:text-brand-600">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={inputClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </label>
  );
}
