export interface IDomHelper
{
    getBodyHeight(): number;
}

const documentHelper: IDomHelper =
    {
        /**
         * Get height of body element in all browsers
         * @source https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
         * @returns {number}
         */
        getBodyHeight(): number
        {
            const height: number = Math.max(document.body.scrollHeight!, document.body.offsetHeight,
                document.documentElement!.clientHeight, document.documentElement!.scrollHeight, document.documentElement!.offsetHeight);
            return height;
        }
    };

export default documentHelper;