import { Migration } from '@mikro-orm/migrations';

export class Migration20201008181749 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" rename column "update_at" to "updated_at";');
  }

}
