"use client" 

export default function CopiedBtn({longUrl}) {
  function handleCopy() {
    navigator.clipboard.writeText(longUrl);
  }

  return (
    <button onClick={() => handleCopy()}>copy</button>
  )
}