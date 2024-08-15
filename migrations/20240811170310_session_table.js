export function up(knex) {
    return knex.schema.createTable('m_sessions', function (table) {
      table.increments('session_id').primary();
      table.string('session_name').notNullable();
      table.enu('is_active', ['Y', 'N']).defaultTo('Y').notNullable();
      table.timestamps(true, true); // Adds created_at and updated_at columns
    }).then(function() {
      // Insert initial data
      return knex('m_sessions').insert([
        { session_name: 'Breakfast' },
        { session_name: 'Lunch' },
        { session_name: 'Snacks' },
        { session_name: 'Dinner' }
      ]);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable('m_sessions');
  }
  