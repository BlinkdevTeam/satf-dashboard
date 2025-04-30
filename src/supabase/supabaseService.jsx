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
    console.log("data", data)

    if (error) throw error
    return data
}

// Update
export const updateItem = async (id, data) => {
    const { data: result, error } = await supabase.from('medical_professionals').update(data).eq('id', id)
    if (error) throw error
    return result
}

// Delete
export const deleteItem = async (id) => {
    const { data: result, error } = await supabase.from('medical_professionals').delete().eq('id', id)
    if (error) throw error
    return result
}
