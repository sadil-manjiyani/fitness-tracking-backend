export const up = function (knex) {
    return knex.schema.createTable('m_bmi_data', function (table) {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.date('date').notNullable();
      table.integer('height_cm').notNullable();
      table.decimal('weight_kg', 5, 2).notNullable();
      table.decimal('bmi', 5, 2).notNullable();
      table.string('bmi_type').notNullable();
      table.string('ideal_range').notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  export const down = function (knex) {
    return knex.schema.dropTable('m_bmi_data');
  };
  