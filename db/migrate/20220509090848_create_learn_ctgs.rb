class CreateLearnCtgs < ActiveRecord::Migration
  def change
    create_table :learn_ctgs do |t|
    
      t.string :name,  null: false, default: Setting.systems.default_str
    

    

    

    

    
      t.timestamps null: false
    end
  end
end
