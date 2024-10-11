import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import React from 'react';
import CopiedBtn from './Button';

export default async function ShortUrlDisplay() {
  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('urls')
    .select('*')
    .eq("user_id", userdata.user?.id); 

  console.log(data);

  return (
    <div className="shortUrls">
    {data?.map((x, i) => (
        <div className='shortUrlItem' key={i}>
          <Link href={x.long_url}>http://localhost:3001/{x.short_url}</Link> 
          <CopiedBtn longUrl={x.long_url} />
        </div>
     ))  
    }
    </div>
  );

}

