
export function up(knex) {
    return knex.schema.createTable('u_user', function (table) {
      table.increments('user_id').primary();
      table.string('user_name').notNullable();
      table.string('user_email').notNullable().unique();
      table.string('user_password').notNullable();
      table.integer('height_cm').notNullable();
      table.decimal('weight_kg', 5, 2).notNullable();
      table.integer('s_water_intake_in_ml').notNullable();
      table.integer('s_calorie_intake').notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
}

export function down(knex) {
    return knex.schema.dropTable('u_user');
}
