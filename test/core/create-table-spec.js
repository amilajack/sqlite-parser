describe('create table', function() {

  it('basic create table', function(done) {
    var resultTree = '{"statement":[{"explain":false,"type":"statement","name":{"type":"identifier","variant":"table","name":"advertisements"},"condition":[],"optimization":[],"definition":[{"type":"definition","variant":"column","name":"id","definition":[{"name":null,"type":"constraint","variant":"primary key","conflict":null,"direction":null,"modififer":null,"autoIncrement":false}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"name","definition":[],"datatype":{"type":"datatype","variant":"varchar","affinity":"text","args":[{"type":"literal","variant":"decimal","value":"50"}]}},{"type":"definition","variant":"column","name":"category","definition":[],"datatype":{"type":"datatype","variant":"varchar","affinity":"text","args":[{"type":"literal","variant":"decimal","value":"15"}]}},{"type":"definition","variant":"column","name":"cost","definition":[],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}}],"temporary":false,"variant":"create","format":"table"}]}';
    tree.equals(resultTree, this, done);
  });

  it('create table alt syntax', function(done) {
    var resultTree = '{"statement":[{"explain":false,"type":"statement","name":{"type":"identifier","variant":"table","name":"bees"},"condition":[],"optimization":null,"definition":[{"type":"statement","variant":"select","from":[{"type":"identifier","variant":"table","name":"old_bees","alias":null,"index":null}],"where":[{"type":"expression","format":"binary","variant":"operation","operation":"is not","left":{"type":"identifier","variant":"column","name":"name"},"right":{"type":"literal","variant":"null","value":"null"}}],"group":null,"result":[{"type":"identifier","variant":"column","name":"name","alias":null},{"type":"identifier","variant":"column","name":"color","alias":null},{"type":"identifier","variant":"column","name":"legs","alias":null},{"type":"identifier","variant":"column","name":"id","alias":null}],"distinct":false,"all":false,"order":null,"limit":null}],"temporary":false,"variant":"create","format":"table"}]}';
    tree.equals(resultTree, this, done);
  });

  it('create foreign key 1', function(done) {
    var resultTree = '{"statement":[{"explain":false,"type":"statement","name":{"type":"identifier","variant":"table","name":"bees"},"condition":[],"optimization":[],"definition":[{"type":"definition","variant":"column","name":"id","definition":[{"name":null,"type":"constraint","variant":"primary key","conflict":null,"direction":null,"modififer":null,"autoIncrement":false}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"color","definition":[],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"hive_id","definition":[{"name":null,"type":"constraint","variant":"unique","conflict":null}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"constraint","name":null,"definition":[{"type":"constraint","variant":"foreign key","action":null,"defer":null,"references":{"type":"identifier","variant":"table","name":"hives"}}],"columns":[{"type":"identifier","variant":"column","name":"hive_id"}]}],"temporary":false,"variant":"create","format":"table"}]}';
    tree.equals(resultTree, this, done);
  });

  it('create foreign key 2', function(done) {
    var resultTree = '{"statement":[{"explain":false,"type":"statement","name":{"type":"identifier","variant":"table","name":"bees"},"condition":[],"optimization":[],"definition":[{"type":"definition","variant":"column","name":"id","definition":[{"name":null,"type":"constraint","variant":"primary key","conflict":null,"direction":null,"modififer":null,"autoIncrement":false}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"color","definition":[],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"hive_id","definition":[{"name":null,"type":"constraint","variant":"unique","conflict":null},{"name":null,"variant":"foreign key","type":"constraint","action":null,"defer":null,"references":{"type":"identifier","variant":"expression","format":"table","name":"hives","columns":[{"type":"identifier","variant":"column","name":"id"}]}}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}}],"temporary":false,"variant":"create","format":"table"}]}';
    tree.equals(resultTree, this, done);
  });

  it('create check 1', function(done) {
    var resultTree = '{"statement":[{"explain":false,"type":"statement","name":{"type":"identifier","variant":"table","name":"bees"},"condition":[],"optimization":[],"definition":[{"type":"definition","variant":"column","name":"id","definition":[{"name":null,"type":"constraint","variant":"primary key","conflict":null,"direction":null,"modififer":null,"autoIncrement":false}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"name","definition":[{"name":null,"type":"constraint","variant":"not null","conflict":null},{"name":null,"type":"constraint","variant":"unique","conflict":null}],"datatype":{"type":"datatype","variant":"varchar","affinity":"text","args":[{"type":"literal","variant":"decimal","value":"50"}]}},{"type":"definition","variant":"column","name":"wings","definition":[{"name":null,"type":"constraint","variant":"check","expression":{"type":"expression","format":"binary","variant":"operation","operation":">=","left":{"type":"identifier","variant":"column","name":"wings"},"right":{"type":"literal","variant":"decimal","value":"2"}}}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"legs","definition":[{"name":null,"type":"constraint","variant":"check","expression":{"type":"expression","format":"binary","variant":"operation","operation":"<","left":{"type":"identifier","variant":"column","name":"legs"},"right":{"type":"literal","variant":"decimal","value":"8"}}}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}}],"temporary":false,"variant":"create","format":"table"}]}';
    tree.equals(resultTree, this, done);
  });

  it('create check 2', function(done) {
    var resultTree = '{"statement":[{"explain":false,"type":"statement","name":{"type":"identifier","variant":"table","name":"bees"},"condition":[],"optimization":[],"definition":[{"type":"definition","variant":"column","name":"id","definition":[{"name":null,"type":"constraint","variant":"primary key","conflict":null,"direction":null,"modififer":null,"autoIncrement":false}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"name","definition":[{"name":null,"type":"constraint","variant":"not null","conflict":null},{"name":null,"type":"constraint","variant":"unique","conflict":null}],"datatype":{"type":"datatype","variant":"varchar","affinity":"text","args":[{"type":"literal","variant":"decimal","value":"50"}]}},{"type":"definition","variant":"column","name":"wings","definition":[],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"legs","definition":[],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"constraint","name":null,"definition":[{"type":"constraint","variant":"check","expression":{"type":"expression","format":"binary","variant":"operation","operation":"<","left":{"type":"identifier","variant":"column","name":"legs"},"right":{"type":"literal","variant":"decimal","value":"8"}}}]},{"type":"definition","variant":"constraint","name":null,"definition":[{"type":"constraint","variant":"check","expression":{"type":"expression","format":"binary","variant":"operation","operation":">=","left":{"type":"identifier","variant":"column","name":"wings"},"right":{"type":"literal","variant":"decimal","value":"2"}}}]}],"temporary":false,"variant":"create","format":"table"}]}';
    tree.equals(resultTree, this, done);
  });

  it('create primary key 1', function(done) {
    var resultTree = '{"statement":[{"explain":false,"type":"statement","name":{"type":"identifier","variant":"table","name":"bees"},"condition":[],"optimization":[],"definition":[{"type":"definition","variant":"column","name":"id","definition":[],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"color","definition":[],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"column","name":"hive_id","definition":[{"name":null,"type":"constraint","variant":"unique","conflict":null}],"datatype":{"type":"datatype","variant":"int","affinity":"integer","args":[]}},{"type":"definition","variant":"constraint","name":null,"definition":[{"type":"constraint","variant":"primary key","conflict":"fail"}],"columns":[{"type":"identifier","variant":"column","format":"indexed","direction":null,"name":"id","collate":null}]}],"temporary":false,"variant":"create","format":"table"}]}';
    tree.equals(resultTree, this, done);
  });

});
