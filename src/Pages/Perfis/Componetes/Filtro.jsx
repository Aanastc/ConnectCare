import { supabase } from '../services/supabase'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oywmlhzozcvvxujidepd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95d21saHpvemN2dnh1amlkZXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwNjMwNjIsImV4cCI6MTk5MzYzOTA2Mn0.HUy5S99QUCpOiNKVm_wmUfmXSNqPCJI4xY5pFc6lIjA';

const supabase = createClient(supabaseUrl, supabaseKey);

import { useEffect, useState } from 'react';

// const TabelaProfiles = () => {
//   const [itens, setItens] = useState([]);

//   useEffect(() => {
//     async function fetchItens() {
//       const { data, error } = await supabase.from('profiles').select('*');
//       if (error) {
//         console.error(error);
//       } else {
//         setItens(data);
//       }
//     }

//     fetchItens();
//   }, []);

//   return (
//     <div>
//       {itens.map((item) => (
//         <div key={item.id}>{item.nome}</div>
//       ))}
//     </div>
//   );
// };
const TabelaProfiles = () => {
    const [itens, setItens] = useState([]);
    const [filtro, setFiltro] = useState('');
  
    useEffect(() => {
      async function fetchItens() {
        let { data, error } = await supabase
          .from('profiles')
          .select('*')
          .ilike('name', `%${filtro}%`);
  
        if (error) {
          console.error(error);
        } else {
          setItens(data);
        }
      }
  
      fetchItens();
    }, [filtro]);
  
    return (
      <div>
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
  
        {itens.map((item) => (
          <div key={item.id}>{item.nome}</div>
        ))}
      </div>
    );
  };
  