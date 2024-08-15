
export function up(knex) {
    return knex.schema.table('m_food_items', function (table) {
      table.decimal('sugar', 5, 2).nullable().after('fiber'); // Adjust 'existing_column_name' to the column after which you want to place 'sugar'
    });
  }
  
export function down(knex) {
    return knex.schema.table('m_food_items', function (table) {
      table.dropColumn('sugar');
    });
  }
  