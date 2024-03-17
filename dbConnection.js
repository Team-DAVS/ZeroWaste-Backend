
const { createClient } = require( '@supabase/supabase-js')
require('dotenv').config()

const supabase = createClient(process.env.projectURL, process.env.supabaseKEY)

module.exports = supabase
