export const up = function (knex) {
    return knex.schema.createTable('m_water_intake', function (table) {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.date('date').notNullable();
      table.integer('quantity_ml').notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  export const down = function (knex) {
    return knex.schema.dropTable('m_water_intake');
  };
  