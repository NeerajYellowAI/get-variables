const test = async () => {
    const res = await fetch(
        'https://r4.cloud.yellow.ai/api/ai/variables?bot=x1690175644644',
        {
            method: 'GET',
            headers: {
                cookie: 'ym_xid=fa5329026bc349d7646a38bd0e05fb389764759e744acc923e3a6e13bdcd0b2dvxRTGEW5IWEHausIiCG7u',
            },
        }
    );
    const result = await res.json();
    console.log(result);
};
test();