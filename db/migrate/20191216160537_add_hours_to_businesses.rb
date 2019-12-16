class AddHoursToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :start_time, :string
    add_column :businesses, :end_time, :string
  end
end
