function one()
{
    for(let i=1;i<=n ; i++)
    {
        for(let j =1;j<=i;j++)
        {
            document.write("*");
        }
        document.write("<br/>");
    }
}

function two()
{
    for(let i=1;i<=n ; i++)
    {
        for(let j=1;j<=n;j++)
        {
            document.write(j);
        }
        document.write("<br/>");
    }
}

function three()
{
    for(let i=0;i<=n;i++)
    {
        for(let j=0;j<=n;j++)
        {
            document.write(i);
        }
        document.write("<br/>");
    }
}

function four()
{
    for(let i=n;i>0;i--)
    {
        for(let j=1;j<=i;j++)
        {
            document.write("* ");
        }
        document.write("<br/>");
    }
}

function five()
{
    for(let i=n;i>=0;i--)
    {
        for(let j=1;j<=i;j++)
        {
            document.write(i);
        }
        document.write();
    }
}

function six()
{
    for(let i = n;i>=0;i++)
    {
        for(let j =n;j>=0;j--)
        {
            document.write(j);
        }
        document.write("<br/>")
    }
}

