import { Injectable } from '@nestjs/common';

/** Boards Service
 *  private boards 위치
 *
 * */
@Injectable()
export class BoardsService {
  private boards = [];

  getAllboards() {
    return this.boards;
  }
}
