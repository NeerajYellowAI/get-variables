const test = async () => {
    console.log('ghj');
    const res = await fetch(
        'https://r4.cloud.yellow.ai/api/ai/variables?bot=x1690175644644',
        {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-api-key': 'hI0uyyZNKqJIRQsI0carq4Q3J-j9Jy3ie_mE-2L7',
            },
        }
    );
    const result = await res.json();
    console.log(result);
};
test();
