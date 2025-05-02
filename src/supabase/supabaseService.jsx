import { supabase } from "../supabaseClient"

// Create
export const createItem = async (data) => {
    const { data: result, error } = await supabase.from('medical_professionals').insert([data])
    if (error) throw error
    return result
}

// Read
export const getItems = async () => {
    const { data, error } = await supabase.from('medical_professionals').select('*').order('created_at', { ascending: false });
    if (error) throw error
    return data
}

// Update
export const updateItem = async (email, data) => {
    const { data: result, error } = await supabase.from('medical_professionals').update(data).eq('email_address', email)
    if (error) throw error
    return result
}

// Delete
export const deleteItem = async (email) => {
    const { data: result, error } = await supabase.from('medical_professionals').delete().eq('email_address', email)
    if (error) throw error
    return result
}
