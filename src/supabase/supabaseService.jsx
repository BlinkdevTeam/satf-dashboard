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
export const updateItem = async (email, data) => {
    console.log("email", email)
    console.log("data", data)
    const { data: result, error } = await supabase.from('medical_professionals').update(data).eq('email_address', email)
    if (error) throw error

    console.log("resultttt", result)

    return result
}

// Delete
export const deleteItem = async (id) => {
    const { data: result, error } = await supabase.from('medical_professionals').delete().eq('id', id)
    if (error) throw error
    return result
}
