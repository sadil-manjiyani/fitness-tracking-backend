export function up(knex) {
    return knex.schema.createTable('m_nutrition', function (table) {
      table.increments('id').primary();
      table.string('food_id').notNullable();
      table.string('serving_size').notNullable();
      table.integer('serving_measurment_id').notNullable();
      table.integer('calories').notNullable();
      table.decimal('fat_g', 5, 2).notNullable();
      table.decimal('carbs_g', 5, 2).notNullable();
      table.decimal('fiber_g', 5, 2).notNullable();
      table.decimal('sugar_g', 5, 2).notNullable();
      table.integer('session_id').notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  export function down(knex){
    return knex.schema.dropTable('m_nutrition');
  };
  