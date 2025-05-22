
using System;
using OCMethod.Interface;
namespace OCMethod.Services
{
    public class TamilTranslator : Translator
    {
        public void translate()
        {
            Console.WriteLine("Vanakkam");
        }
    }
    public class HindiTranslator : Translator
    {
        public void translate()
        {
            Console.WriteLine("Namaste");
        }
    }
    public class EnglishTranslator : Translator
    {
        public void translate()
        {
            Console.WriteLine("Hello");
        }
    }
    public class Processor
    {
        public void translateprocessor(Translator languaetype)
        {
            languaetype.translate(); 
        }
    }
}