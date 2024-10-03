"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ResultShortUrl from "../result/page";

export default function Form() {
  const [data, setData] = useState(null);
  const [urls, setUrls] = useState([]);
  const [longUrl, setLongUrl] = useState("");
  const router = useRouter();

  function makeid(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const fetchData = async () => {
    const supabaseUrl = 'https://ubanfdmldqhurzsqvmzk.supabase.co/rest/v1/urls';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViYW5mZG1sZHFodXJ6c3F2bXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2MjIsImV4cCI6MjA0MzM3ODYyMn0.9QvNgrCidYigkhoL49POC-NNJRixPkqhxOiomGLBs3E';
    
    const response = await fetch(supabaseUrl, {
      method: "GET",
      headers: {
        apiKey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    });

    const results = await response.json();

    if (results) {
      const newUrl = results.find((x) => x.long_url === longUrl);
      setData(newUrl);
    }

    setUrls(results); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const insertData = async (long, short) => {
    const supabaseUrl = 'https://ubanfdmldqhurzsqvmzk.supabase.co/rest/v1/urls';
    const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViYW5mZG1sZHFodXJ6c3F2bXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2MjIsImV4cCI6MjA0MzM3ODYyMn0.9QvNgrCidYigkhoL49POC-NNJRixPkqhxOiomGLBs3E';

    const payload = {
      long_url: long,
      short_url: short,
    };

    const response = await fetch(supabaseUrl, {
      method: "POST",
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      await fetchData();
    } 
  };
    
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const shortUrl = makeid(7);
    await insertData(longUrl, shortUrl);
    setLongUrl("");
  };

  return (
    <> 
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Shorten a link here..." 
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)} 
          required
        />
        <button type="submit">Shorten It!</button>
      </form>
    </div>
    
      <ResultShortUrl shortUrl={data?.short_url} longUrl={data?.long_url} />
    </>
  );
}
