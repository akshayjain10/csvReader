class DBUpdate {
  constructor(Schema) {
    this.Schema = Schema;
  }

  insertMany(...args) {
    return this.Schema.insertMany(...args);
  }

  create(body) {
    const schema = new this.Schema(body);
    return schema.save();
  }

  aggregate(...args) {
    return this.Schema.aggregate(...args).exec();
  }

  count(...args) {
    return this.Schema.count(...args).exec();
  }

  find(...args) {
    return this.Schema.find(...args).exec();
  }

  findOne(...args) {
    return this.Schema.findOne(...args).exec();
  }

  findById(...args) {
    return this.Schema.findById(...args).exec();
  }

  update(...args) {
    return this.Schema.update(...args).exec();
  }

  remove(...args) {
    return this.Schema.remove(...args).exec();
  }
}

module.exports = DBUpdate;
