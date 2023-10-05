// Connect to our database 
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {
  try {
      // Get everything from the notes table
      const { data: selectData, error: selectError } = await supabase
          .from('kids')
          .select('*');
      return {
          statusCode: 200,
          body: JSON.stringify({ selectData }),
      };
  } catch (e) {
      console.error('Error:', e);
      return {
          statusCode: 500,
          body: JSON.stringify({ error: e.message }),
      };
  }
};

