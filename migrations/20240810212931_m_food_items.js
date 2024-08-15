export function up (knex) {
    return knex.schema.createTable('m_food_items', function (table) {
      table.increments('food_id').primary();
      table.string('food_name').notNullable();
      table.string('food_type').notNullable();
      table.integer('calories_per_100gm').notNullable(); // Renamed column for calories
      table.decimal('fats', 5, 2).notNullable();
      table.decimal('carbs', 5, 2).notNullable();
      table.decimal('fiber', 5, 2).notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  export function down (knex) {
    return knex.schema.dropTable('m_food_items');
  };
  