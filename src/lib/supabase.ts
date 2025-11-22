import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabaseInstance;

// Only create client if credentials are provided
if (supabaseUrl && supabaseAnonKey) {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  console.log("✅ Conexão com Supabase estabelecida com sucesso!");
} else {
  supabaseInstance = null;
  console.warn("⚠️ Credenciais do Supabase não encontradas. Usando dados de exemplo.");
}

export const supabase = supabaseInstance;

export const incrementMetric = async (pageId: string, type: 'visit' | 'like') => {
  if (!supabase) return; // Skip if no backend configured
  
  try {
    const { data: existing } = await supabase
      .from('metrics')
      .select('*')
      .eq('page_id', pageId)
      .single();

    if (existing) {
      // Stop incrementing if the limit is reached
      if (type === 'visit' && existing.visits >= 9999) return;
      if (type === 'like' && existing.likes >= 9999) return;

      const updates = type === 'visit' 
        ? { visits: existing.visits + 1 }
        : { likes: existing.likes + 1 };
      
      await supabase
        .from('metrics')
        .update(updates)
        .eq('page_id', pageId);
    } else {
      await supabase
        .from('metrics')
        .insert({
          page_id: pageId,
          visits: type === 'visit' ? 1 : 0,
          likes: type === 'like' ? 1 : 0,
        });
    }
  } catch (error) {
    console.error('Erro ao atualizar métricas:', error);
  }
};

export const getMetrics = async (pageId: string) => {
  if (!supabase) {
    // Return mock data if no backend configured
    console.log(`Supabase não configurado. Retornando métricas de exemplo para a página: ${pageId}`);
    return { visits: 150, likes: 0 };
  }
  
  try {
    console.log(`Buscando métricas reais do Supabase para a página: ${pageId}`);
    const { data } = await supabase
      .from('metrics')
      .select('*')
      .eq('page_id', pageId)
      .single();
    
    return data || { visits: 0, likes: 0 };
  } catch (error) {
    console.error('Erro ao buscar métricas:', error);
    return { visits: 0, likes: 0 };
  }
};