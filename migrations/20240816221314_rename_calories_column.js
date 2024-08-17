export const up = async function(knex) {
    await knex.schema.table('m_food_items', function(table) {
      table.renameColumn('calories_per_100gm', 'calories');
    });
  };
  
  export const down = async function(knex) {
    await knex.schema.table('m_food_items', function(table) {
      table.renameColumn('calories', 'calories_per_100gm');
    });
  };
  