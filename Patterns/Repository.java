interface Repository<T> {
    void add(T item);

    void add(Iterable<T> items);

    void update(T item);

    void remove(T item);

    void remove(Specification specification);

    List<T> query(Specification specification);
}

class NewsSqlRepository implements Repository<News> {
    private final SQLiteOpenHelper openHelper;

    private final Mapper<News, ContentValues> toContentValuesMapper;
    private final Mapper<Cursor, News> toNewsMapper;

    public NewsSqlRepository(SQLiteOpenHelper openHelper) {
        this.openHelper = openHelper;

        this.toContentValuesMapper = new NewsToContentValuesMapper();
        this.toNewsMapper = new CursorToNewsMapper();
    }

    @Override
    public void add(News item) {
        add(Collections.singletonList(item));
    }

    @Override
    public void add(Iterable<News> items) {
        final SQLiteDatabase database = openHelper.getWritableDatabase();
        database.beginTransaction();

        try {
            for (News item : items) {
                final ContentValues contentValues = toContentValuesMapper.map(item);

                database.insert(NewsTable.TABLE_NAME, null, contentValues);
            }

            database.setTransactionSuccessful();
        } finally {
            database.endTransaction();
            database.close();
        }
    }

    @Override
    public void update(News item) {
        // TODO to be implemented
    }

    @Override
    public void remove(News item) {
        // TODO to be implemented
    }

    @Override
    public void remove(Specification specification) {
        // TODO to be implemented
    }

    @Override
    public List<News> query(Specification specification) {
        final SqlSpecification sqlSpecification = (SqlSpecification) specification;

        final SQLiteDatabase database = openHelper.getReadableDatabase();
        final List<News> newses = new ArrayList<>();

        try {
            final Cursor cursor = database.rawQuery(sqlSpecification.toSqlQuery(), new String[]{});

            for (int i = 0, size = cursor.getCount(); i < size; i++) {
                cursor.moveToPosition(i);

                newses.add(toNewsMapper.map(cursor));
            }

            cursor.close();

            return newses;
        } finally {
            database.close();
        }
    }
}