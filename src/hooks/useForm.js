import { useState } from 'react';

const initialData = { name: '', text: '', rating: '' };

export function useForm() {
  const [form, setForm] = useState(initialData);

  const setFieldValue = (value, field) => {
    setForm({ ...form, [field]: value.toString() });
  };

  const setName = (evt) => setFieldValue(evt.target.value, 'name');
  const setText = (evt) => setFieldValue(evt.target.value, 'text');
  const setRating = (evt) => setFieldValue(+evt.target.value, 'rating');
  const clearForm = () => setForm(initialData);

  return { form, setName, setText, setRating, clearForm };
}
