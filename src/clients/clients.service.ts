import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private readonly db: PrismaService) {}

  create(createClientDto: CreateClientDto) {
    return this.db.client.create({
      data: {
        name: createClientDto.name,
        address: createClientDto.address,
        dataLimit: createClientDto.dataLimit,
        hasCable: createClientDto.hasCable,
      },
    });
  }

  async findAll() {
    return this.db.client.findMany();
  }

  findOne(id: number) {
    return this.db.client.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.db.client.update({
      where: {
        id,
      },
      data: {
        name: updateClientDto.name,
        address: updateClientDto.address,
        dataLimit: updateClientDto.dataLimit,
        hasCable: updateClientDto.hasCable,
      },
    });
  }

  remove(id: number) {
    return this.db.client.delete({
      where: {
        id
      },
    });
  }
}
