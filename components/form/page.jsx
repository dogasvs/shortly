"use client";
import { linkToShortAction } from "@/actions/link";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

export default function Form() {

  const [state, action] = useFormState(linkToShortAction, {
    message: null,
    error: null
  });
  const formRef = useRef(null);
  useEffect(() => {
    if (state?.message) {
        toast.success(state.message)
        formRef.current.reset();
    }
    if(state?.error){
      toast.error(state.error)
  }
  }, [state]);

  return (
    <> 
    <div className="form">
      <form action={action} ref={formRef}>
        <input 
          name="long_url"
          type="text" 
          placeholder="Shorten a link here..." 
          required
        />
        <button type="submit">Shorten It!</button>
      </form>
    </div>
     </>
  );
}
