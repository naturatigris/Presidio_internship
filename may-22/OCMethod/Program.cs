using System;
using OCMethod.Services;
using OCMethod.Interface;

namespace OCMethod
{
    public class Language
    {
        public static void Main()
        {
            Processor language = new Processor();
            Translator Tamil = new TamilTranslator();
            Translator Hindi = new HindiTranslator();
            Translator English = new EnglishTranslator();

            language.translateprocessor(Tamil);
            language.translateprocessor(Hindi);
            language.translateprocessor(English);

        }
    }
}