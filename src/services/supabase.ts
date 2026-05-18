/**
 * @fileoverview Configuração e instância do cliente Supabase.
 * Inicializa o cliente com as credenciais obtidas das variáveis de ambiente.
 */

import { createClient } from '@supabase/supabase-js';

/** URL do projeto Supabase obtida das variáveis de ambiente */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

/** Chave anônima do Supabase obtida das variáveis de ambiente */
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Instância do cliente Supabase utilizada para autenticação e acesso ao banco de dados.
 * @type {SupabaseClient}
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
