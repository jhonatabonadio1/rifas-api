import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Status } from '../../models/Status'

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Status)
      .values([
        { name: 'published' },
        { name: 'in_schedule' },
        { name: 'disabled' },
        { name: 'draft' },
      ])
      .execute()
  }
}
