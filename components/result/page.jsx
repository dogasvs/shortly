import { createClient } from '@/utils/supabase/server';
import React from 'react';

export default async function ShortUrlDisplay() {
  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('urls')
    .select('*')
    .eq("user_id", userdata.user?.id); //karsilastirma operatörü
  console.log(data);
  console.log(userdata);

  return (
    <div className="shortUrls">
     {data?.map((x, i) => (
        <div key={i}>{x.long_url}</div>
     ))  
    }
    </div>
  );

}

