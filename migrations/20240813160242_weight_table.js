export const up = function (knex) {
    return knex.schema.createTable('m_weight_data', function (table) {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.date('date').notNullable();
      table.decimal('weight_kg', 5, 2).notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  export const down = function (knex) {
    return knex.schema.dropTable('m_weight_data');
  };
  